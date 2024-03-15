import avatar from "../files/avatar.png"

const Contact = () => {
  return (
    <div className="h-screen relative flex justify-center items-center text-white">
      <img
        src={avatar}
        className="absolute shadow-inner w-72 h-72 right-[24rem] top-[11.6rem] z-10"
      />
      <div className="w-[72rem] shadow-inner rounded-3xl bg-stone-900 py-12 text-center">
        <h1 className="text-4xl font-inter">Wanna build something together?</h1>
        <p>Contact me at:</p>
        <a href="mailto:manito.russel@gmail.com" className="hover:underline">
          manito.russel@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Contact
