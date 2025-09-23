import { Helmet } from "react-helmet";
import ErrorPage from "../../ErrorPages/ErrorPage";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Contact Us | LawyerSpot
                </title>
            </Helmet>
                <ErrorPage></ErrorPage>
        </div>
    );
};

export default Contact;