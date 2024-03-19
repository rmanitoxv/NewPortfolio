import avatar from "../files/avatar.png"

const Contact = () => {
  return (
    <div className="h-screen flex justify-center items-center text-white px-8 ">
      <div className="lg:w-[72rem] shadow-inner rounded-3xl bg-stone-900 py-12 text-center relative">
        <img
          src={avatar}
          className="absolute shadow-inner w-48 g-48 lg:w-72 lg:h-72 z-10 lg:-top-48 lg:right-20 -top-32 -right-4"
        />
        <h1 className="lg:text-4xl text-2xl font-inter px-4">
          Wanna build something together?
        </h1>
        <p>Contact me at:</p>
        <a href="mailto:manito.russel@gmail.com" className="hover:underline">
          manito.russel@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Contact
