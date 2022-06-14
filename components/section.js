import Link from 'next/link'

export default function Section(props) {
  return (
    <section className={`${props.slug} ${props.style}`}>
      <div className='image-1 float-image' style={{ backgroundImage: `url(${props.image1})` }} />
      <h2>{props.title}</h2>
      {props.text1 &&
        <span dangerouslySetInnerHTML={{ __html: props.text1 }} />
      }

      {props.image2 &&
        <>
          <div className='image-2 float-image' style={{ backgroundImage: `url(${props.image2})` }} />
        </>
      }
      {props.text2 &&
        <>
          <span dangerouslySetInnerHTML={{ __html: props.text2 }} />
        </>
      }
    </section>
  )
}



