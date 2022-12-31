import Card from './Card';

export default function Banner({ children }) {
  return (
    <section className="section m-horizontal">
      <Card borderRadius="rounded-2xl xl:rounded-5xl">
        <div className="px-5 pt-7 pb-9 md:px-8 md:pt-8 md:pb-12 xl:px-16 xl:pt-16 xl:pb-20 2xl:px-20">
          {children}
        </div>
      </Card>
    </section>
  );
}
