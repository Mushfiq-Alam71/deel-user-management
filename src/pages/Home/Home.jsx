import BannerSlider from "../../components/BannerSlider/BannerSlider";
import WorkManagement from "../../components/WorkManagement/WorkManagement";


const Home = () => {


    return (
        <section className="my-8 relative py-12">
            <div className="absolute w-[800px] h-full top-[-155px] left-60 z-0">
                <svg className="opacity-70" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#D0E2FF" d="M40.7,-37.2C56.3,-25.1,75,-12.5,80.3,5.2C85.5,23,77.2,46,61.6,54.8C46,63.6,23,58.2,2.5,55.7C-18,53.2,-36,53.6,-48.7,44.8C-61.4,36,-68.7,18,-70,-1.3C-71.3,-20.6,-66.6,-41.2,-53.9,-53.4C-41.2,-65.6,-20.6,-69.3,-4,-65.3C12.5,-61.2,25.1,-49.4,40.7,-37.2Z" transform="translate(100 100)" />
                </svg>
            </div>
            <div className="relative flex flex-col justify-center text-wrap gap-8 mx-48 z-10">
                <h1 className="text-7xl font-semibold text-center">Manage your entire team in one app</h1>
                <p className="text-3xl font-normal text-center">Connecteam simplifies everyday work with deskless teams and keeps them connected, so you can focus on growing the business</p>
                <div className="flex flex-row justify-center gap-4">
                    <button className="btn btn-outline rounded-full text-xl font-medium">Start 15-days free trail</button>
                    <button className="btn btn-outline rounded-full text-xl font-medium">Book a demo</button>
                </div>
            </div>
            <div className="mt-24">
                <BannerSlider></BannerSlider>
            </div>
            <div>
                <WorkManagement></WorkManagement>
            </div>
        </section>

    );
};

export default Home;
