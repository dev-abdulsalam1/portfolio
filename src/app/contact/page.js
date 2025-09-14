import { IoLocationOutline, IoCallOutline, IoMailOutline, IoGlobeOutline } from "react-icons/io5";

export default function Contact() {
  const contacts = [
    { icon: <IoLocationOutline size={22} />, text: "Mogadishu, Somalia" },
    { icon: <IoGlobeOutline size={22} />, text: "www.abdulsalam.com" },
    { icon: <IoCallOutline size={22} />, text: "+252 616 88 10 31" },
    { icon: <IoMailOutline size={22} />, text: "cshiiqow@gmail.com" },
  ];

  return (
    <section className="py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">Contact</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 hover:shadow-lg transition"
          >
            <span className="text-primary">{item.icon}</span>
            <h3 className="text-gray-700 dark:text-gray-200">{item.text}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
