import { useMemo, useRef, useEffect, useState } from "react";

import { getCourses } from "../lib/sheets";
import SEO from "../components/other/SEO";
import { Tooltip } from "../components/navigation/Tooltip";
import Footer from "../components/navigation/Footer";
import * as d3 from "d3";

export default function Courses({ courses }) {
  return (
    <>
      <SEO
        title="Courses | UWaterloo Data Science Club"
        description="Want to learn more about Data Science? Take a look at our resources here."
        keywords="uwflow"
      />
      <h1 className="mb-6 text-center md:mb-0">
        <span className="h1">Resources</span>
      </h1>
      <CoursesGraph courses={courses} />
      <Footer />
    </>
  );
}

const getX = (course, use_tfidf = false) => {
  if (use_tfidf) {
    return course.xs_tfidf[0];
  }
  return course.xs_sbert[0];
};

const getY = (course, use_tfidf = false) => {
  if (use_tfidf) {
    return course.xs_tfidf[1];
  }
  return course.xs_sbert[1];
};

const MARGIN = { top: 50, right: 50, bottom: 60, left: 100 };
const BUBBLE_MIN_SIZE = 1;
const BUBBLE_MAX_SIZE = 7;

function CoursesGraph({ courses }) {
  const [hovered, setHovered] = useState(null);
  const [closestCourses, setClosestCourses] = useState([]);
  const [useTFIDF, setUseTFIDF] = useState(false);

  const width = 1000;
  const height = 1000;
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Scales
  const yScale = useMemo(() => {
    const [min, max] = d3.extent(courses.map((d) => getY(d, useTFIDF)));
    return d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]).nice();
  }, [courses, height]);

  const xScale = useMemo(() => {
    const [min, max] = d3.extent(courses.map((d) => getX(d, useTFIDF)));
    return d3.scaleLinear().domain([min, max]).range([0, boundsWidth]).nice();
  }, [courses, width]);

  const groups = courses
    .map((d) => d.course_code)
    .filter((x, i, a) => a.indexOf(x) == i);

  const colorScale = d3
    .scaleOrdinal()
    .domain(groups)
    .range(["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"]);

  const sizeScale = useMemo(() => {
    const [min, max] = d3.extent(courses.map((d) => d.useful));
    return d3
      .scaleSqrt()
      .domain([min, max])
      .range([BUBBLE_MIN_SIZE, BUBBLE_MAX_SIZE]);
  }, [courses, width]);

  // Render the X and Y axis using d3.js, not react
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();

    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (boundsHeight + 20) + ")")
      .call(xAxisGenerator);

    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement
      .append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + -20 + ",0)")
      .call(yAxisGenerator);

    d3.selectAll(".x.axis").style("color", "white");
    d3.selectAll(".y.axis").style("color", "white");
  }, [xScale, yScale, boundsHeight, boundsWidth]);

  // Build the shapes
  const allShapes = courses.map((d, i) => {
    return (
      <circle
        key={i}
        r={sizeScale(d.useful)}
        cx={xScale(getX(d, useTFIDF))}
        cy={yScale(getY(d, useTFIDF))}
        opacity={1}
        // stroke="#e0ac2b"
        stroke={colorScale(d.course_code)}
        fill={colorScale(d.course_code)}
        fillOpacity={0.4}
        strokeWidth={1}
        onMouseEnter={() =>
          setHovered({
            xPos: xScale(getX(d, useTFIDF)),
            yPos: yScale(getY(d, useTFIDF)),
            name: d.code,
            obj: d,
          })
        }
        onClick={() => window.open(`https://uwflow.com/course/${d.code}`)}
        onMouseLeave={() => {
          setHovered(null);
          setClosestCourses([]);
        }}
      />
    );
  });

  const allLines = closestCourses.slice(0, -1).map((d, i) => {
    return (
      <line
        key={i}
        r={sizeScale(d.useful)}
        x1={closestCourses.at(-1).xPos}
        y1={closestCourses.at(-1).yPos}
        x2={xScale(getX(d, useTFIDF))}
        y2={yScale(getY(d, useTFIDF))}
        opacity={1}
        stroke="#e0ac2b"
        strokeWidth={1}
      />
    );
  });

  return (
    <div>
      <>
        <input
          type="checkbox"
          role="switch"
          id="flexSwitch"
          checked={useTFIDF}
          onChange={(e) => setUseTFIDF(e.target.checked)}
        />
        <label
          class="inline-block pl-[0.15rem] hover:cursor-pointer"
          for="flexSwitch"
        >
          {useTFIDF ? "TF-IDF" : "S-BERT"}
        </label>
      </>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {allShapes}
          {allLines}
        </g>
        <g
          width={boundsWidth}
          height={boundsHeight}
          ref={axesRef}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        />
      </svg>
      <div
        style={{
          width: boundsWidth,
          height: boundsHeight,
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          marginLeft: MARGIN.left,
          marginTop: MARGIN.top,
        }}
      >
        <Tooltip
          interactionData={hovered}
          courses={courses}
          setClosestCourses={setClosestCourses}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const courses = await getCourses();
  return {
    props: {
      courses,
    },
  };
}
