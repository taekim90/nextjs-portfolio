import axios from "axios"

// when we get data from the server, it is available as props

export default function Animals({ data }) {
    return (
        <h1>
            Random Animal: {data.random}
        </h1>
    )
}

// we can do axios or fetch here

// export a function thats called 'getStatic Props
// whatever is returned from this function becomes the 'data' prop in our component
export async function getStaticProps() {
    // we can do all of our ajax/axios/fetch here. as many calls as we want
    // we can call external APIs, express backends, or next backend
    // const response = await axios.get('http://localhost:3000/api/animals')
    // object destructuring to get the data
    // const { data } = await axios.get('http://localhost:3000/api/animals') // this url will change based on where you deploy it
    const { data } = await axios.get(`${process.env.SERVER_URL}/api/animals`) // this url will change based on where you deploy it
    console.log(data)

    // these props are available to us in the component
    return {
        props: { 
            data,
            otherProp: 'hi!'
        }
    }
}