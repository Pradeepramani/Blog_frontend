import {BsFacebook,BsInstagram, BsLinkedin} from 'react-icons/bs'


function footer()
{
    const newdate=new Date()
    const year =newdate.getFullYear()
   return(
    <>
    <footer className="relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between sm:px-2">

        <section className="text-lg">
            Copyright {year} all rights reserved
        </section>

    <section className="flex items-center justify-center gap-5 text-2xl text-white">
        <a href="#" className="hover:text-yellow-500 transition-all ease-in-out duration-300">
        <BsFacebook/>
        </a>
        <a href="#" className="hover:text-yellow-500 transition-all ease-in-out duration-300">
        <BsInstagram/>
        </a>
        <a href="#" className="hover:text-yellow-500 transition-all ease-in-out duration-300">
        <BsLinkedin />
        </a>
        <a href="#" className="hover:text-yellow-500 transition-all ease-in-out duration-300">
        <BsFacebook />
        </a>
    </section>

    </footer>

    </>
   )


}


export default footer