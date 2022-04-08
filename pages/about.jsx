// import SSR caching image tag
import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.bgBlack}>
            <h1 className={styles.coolText}>About Me</h1>

            <p>I am now a software engineer. I make neat stuff with code</p>

            {/* loading an image locally */}
            {/* an img tag would have also worked -- just no SSR caching */}
            <Image 
                src="/vercel.svg"
                alt="the vercel logo bc I <3 vercel"
                width={500}
                height={500}
            />

            {/* loading an image from another hosting domain - this is a security feature built into Next */}
            <Image
                src="https://placekitten.com/300/300"
                alt="a picture of a cat"
                width={300}
                height={300}
            />
        </div>
    )
}