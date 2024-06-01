
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from '../../assets/error_animation.json'

const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-full p-52 ">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-xl text-center">
                        <div >
                            <Lottie
                                height={800}
                                width={1000}
                                animationData={animationData}
                            />
                        </div>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn&#39;t find this page.</p>
                        <p className="mt-4 mb-8 ">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to='/' rel="noopener noreferrer" href="#" className="btn btn-outline font-semibold text-xl rounded">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;
