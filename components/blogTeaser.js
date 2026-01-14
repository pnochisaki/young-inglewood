import Link from "next/link"

export default function BlogTeaser(props) {
    return (
        <li
            key={props.slug}
        >
            <Link href={`/dispatch/${props.slug}`}>
                {props.image && (
                    <div className='image-container'><img
                        src={props.image}
                        alt={props.title}
                    /></div>
                )}
                <h3>{props.title}</h3>
                <div className='excerpt'>{props.excerpt}</div>
                <button className="c7-btn"><span>Read more</span></button>
            </Link>
        </li>
    )
}