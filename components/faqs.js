
export default function Faqs(props) {
    return (
        <>
            {props.data?.faqs && props.data?.faqs.length > 0 && (
                <div className="faqs">
                    <ul>
                        {props.data.faqs.map((faq, index) => (
                            <li key={index}>
                                <div className='box'>
                                    <a className='question'>{faq.question}</a>
                                    <div className='answer'>{faq.answer}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}



