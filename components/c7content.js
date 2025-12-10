export default function C7content(props) {
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
        <div id="c7-content"></div>
    )
}



