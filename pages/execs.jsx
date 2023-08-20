import Footer from '../components/navigation/Footer';
import Html5QrcodePlugin from './qr-scanner'
import { useRouter } from 'next/router';

const Scanner = (props) => {
  const router = useRouter();

  const onNewScanResult = (decodedText, decodedResult) => {
    window.open(decodedText, '_blank');
    // router.push(decodedText);
  };

  return (
    <>
      <div className="Scanner">
        <Html5QrcodePlugin 
          fps={10}
          qrbox={800}
          disableFlip={false}
          aspectRatio={1.0}
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