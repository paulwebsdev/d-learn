const stats = [
  {
    number: "5,000+",
    title: "Practice Questions",
  },
  {
    number: "500+",
    title: "Lessons",
  },
  {
    number: "95%",
    title: "Student Satisfaction",
  },
  {
    number: "24/7",
    title: "Study Access",
  },
];

function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-blue-600">
                {item.number}
              </h2>

              <p className="mt-2 text-gray-600">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;