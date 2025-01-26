import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";


const Home = () => {
    return (
        <div>
              <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home Page</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            <Banner></Banner>
            <ContactForm></ContactForm>


        </div>
    );
};

export default Home;