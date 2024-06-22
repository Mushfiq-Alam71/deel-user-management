import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";


const Testimonials = () => {
   return (
      <div>
         <div className="text-center">
            <h1 className="text-4xl font-bold">Testimonials</h1>
         </div>
         <div className="flex flex-col lg:flex-row pt-8 pb-12 lg:ml-0 ml-4 gap-4">
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800" bis_skin_checked="1">
               <div className="flex justify-between p-4" bis_skin_checked="1">
                  <div className="flex space-x-4" bis_skin_checked="1">
                     <div bis_skin_checked="1">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                     </div>
                     <div bis_skin_checked="1">
                        <h4 className="font-bold text-xl">Emily Johnson</h4>
                        <span className="text-base dark:text-gray-600">4 days ago</span>
                     </div>
                  </div>
                  <div className="flex items-center space-x-2 dark:text-yellow-700" bis_skin_checked="1">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                     </svg>
                     <span className="text-2xl font-bold">4.5</span>
                  </div>
               </div>
               <div className="p-4 space-y-2 text-sm dark:text-gray-600" bis_skin_checked="1">
                  <p className="text-lg">Absolutely mesmerizing! The painting I purchased exceeded all expectations. The colors are vibrant, and the attention to detail is exceptional.</p>
                  <p className="text-lg"> It brings joy to my space every time I glance at it. Fantastic customer service too! Highly recommend this gallery for anyone seeking art that truly speaks to the soul.</p>
               </div>
            </div>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800" bis_skin_checked="1">
               <div className="flex justify-between p-4" bis_skin_checked="1">
                  <div className="flex space-x-4" bis_skin_checked="1">
                     <div bis_skin_checked="1">
                        <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                     </div>
                     <div bis_skin_checked="1">
                        <h4 className="font-bold text-xl">Ethan Wang</h4>
                        <span className="text-base dark:text-gray-600">1 days ago</span>
                     </div>
                  </div>
                  <div className="flex items-center space-x-2 dark:text-yellow-700" bis_skin_checked="1">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                     </svg>
                     <span className="text-2xl font-bold">5</span>
                  </div>
               </div>
               <div className="p-4 space-y-2 text-sm dark:text-gray-600" bis_skin_checked="1">
                  <p className="text-lg">Thrilled with my purchase! The portrait I received captures the essence of my loved one perfectly. The artist's skill is remarkable, evident in every stroke. </p>
                  <p className="text-lg">The customer service was outstanding—prompt communication and careful packaging. This gallery truly delivers on quality and professionalism. Couldn't be happier with my experience!</p>
               </div>
            </div>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800" bis_skin_checked="1">
               <div className="flex justify-between p-4" bis_skin_checked="1">
                  <div className="flex space-x-4" bis_skin_checked="1">
                     <div bis_skin_checked="1">
                        <img src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                     </div>
                     <div bis_skin_checked="1">
                        <h4 className="font-bold text-xl">Leroy Jenkins</h4>
                        <span className="text-base dark:text-gray-600">2 days ago</span>
                     </div>
                  </div>
                  <div className="flex items-center space-x-2 dark:text-yellow-700" bis_skin_checked="1">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                     </svg>
                     <span className="text-2xl font-bold">4.8</span>
                  </div>
               </div>
               <div className="p-4 space-y-2 text-sm dark:text-gray-600" bis_skin_checked="1">
                  <p className="text-lg">Absolutely stunning artwork! The landscape painting I bought is like a window to another world. The artist's talent is awe-inspiring</p>
                  <p className="text-lg">The depth and detail are incredible. The transaction was smooth, and the piece arrived safely packaged. It's the focal point of my home now. Thank you for such a beautiful addition!</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Testimonials;