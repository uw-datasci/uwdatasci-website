import Footer from '../components/navigation/Footer';
import Html5QrcodePlugin from './qr-scanner'
import { useRouter } from 'next/router';

const Scanner = (props) => {
  const router = useRouter();

  const onNewScanResult = (decodedText, decodedResult) => {
    // handle decoded results here
    open(decodedResult);
  };

  return (
    <>
      <div className="Scanner">
        <Html5QrcodePlugin 
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Scanner;