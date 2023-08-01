import Image from "next/image";
const page = () => {
  return (
    <html>
      <head>
        <title>BuildHubb Waitlist</title>
      </head>
      <body>
        <form action="" className="md:border-2 border-blue-500 max-w-md">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
          <h3>Join the waitlist</h3>
          <input type="text" placeholder="Full Name" required />
          <br />
          <input
            type="email"
            name="mail"
            id="mail"
            placeholder="Email Address"
            required
          />
          <button type="submit" className="bg-opacity-50 block">
            Join
          </button>
          <iframe
            src="https://buildhubb.substack.com/embed"
            width="480"
            height="320"
          ></iframe>
        </form>
      </body>
    </html>
  );
};

export default page;
