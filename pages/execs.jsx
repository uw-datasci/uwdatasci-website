import Footer from '../components/navigation/Footer';
import { QrReader } from 'react-qr-reader';

export default function Prompt () {
  return (
    <>
    <h1>Testing!!!!!</h1>
    <Footer />
    </>
  );
}
// for scanner 
// export default function Test (props) {
//     const [data, setData] = useState('No result');
  
//     return (
//       <>
//       <h1>Test!</h1>
//         <QrReader
//           onResult={(result, error) => {
//             if (!!result) {
//               setData(result?.text);
//             }
  
//             if (!!error) {
//               console.info(error);
//             }
//           }}
//           style={{ width: '100%' }}
//           constraints={{ facingMode: 'environment' }}

//         />
//         <p>{data}</p>
//         <Footer />
//       </>
//     );
// };