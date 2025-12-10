import C7content from '../../components/c7content';
import Layout from '../../components/layout';
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script';

export default function Collection() {

    useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.commerce7.com/v2/commerce7.js';
    script.dataset.tenant = 'young-inglewood-vineyards';
    script.id = 'c7-javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up if necessary
    };
  }, []);


  return (
    <Layout purchase>
      <div className="page-margins">
        <C7content />
        <GoogleTagManager gtmId="GTM-TFFRHCGB" />
      </div>
    </Layout>
  )

}

