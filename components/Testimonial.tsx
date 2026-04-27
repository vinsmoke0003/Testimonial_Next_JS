type CardProps = {
  name: string;
  role: string;
  quote: string;
  image?: string;
};

function TestimonialCard({ name, role, quote, image }: CardProps) {
  return (
    <div>
      <p className="text-sm text-gray-500 leading-relaxed">“ {quote} ”</p>
      <div className="flex items-center gap-3 mt-3">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-9 h-9 rounded-full object-cover"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
        <div>
          <div className="text-sm font-semibold text-gray-900">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );
}

const testimonials: CardProps[] = [
  {
    name: "Karen Smith",
    role: "Entrepreneur",
    quote:
      "This app showed me how small habits like staying up too late—were affecting my sleep. Now I keep a consistent routine and mornings are so much easier.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jessica Wise",
    role: "Book Writer",
    quote:
      "Finally, a sleep tracker that's easy to use and actually motivates me to improve my sleep. Best health choice I've made this year.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-white p-4 md:p-6 min-h-screen">
      <div className="bg-[#f3f4f6] rounded-3xl px-6 md:px-16 py-12 flex flex-col md:flex-row items-center gap-0 w-full min-h-[calc(100vh-3rem)] relative">
        {/* LEFT SIDE */}
        <div className="flex-1 max-w-xl flex flex-col gap-6 relative z-10">
          <svg
            className="w-14 h-14 text-gray-900 rotate-180"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 17h3l2-4V7H2v6h3zm10 0h3l2-4V7h-6v6h3z" />
          </svg>
          <p className="text-4xl md:text-4xl font-semibold leading-tight text-gray-900">
            I never realized how poor my sleep was until I started tracking it.
            Now I wake up fresher and know exactly what helps me rest better.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Angela"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-sm text-gray-900">
                Angela Summer
              </div>
              <div className="text-xs text-gray-500">Book Writer</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CARD - overlaps left */}
        <div className="flex-[1.5] flex justify-center w-full md:-ml-20 relative z-0">
          <div
            className="w-full bg-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8"
            style={{
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.8) inset, 0 20px 50px -10px rgba(0,0,0,0.15)",
            }}
          >
            {/* IMAGE with gradient shadow */}
            <div className="relative w-full md:w-80 h-96 rounded-2xl overflow-hidden flex-shrink-0 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80"
                alt="woman"
                className="w-full h-full object-cover"
              />
              {/* gradient overlay at the bottom for soft fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
              <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-gray-200 text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                See More Sleeping Stories
              </button>
            </div>

            {/* TESTIMONIALS */}
            <div className="flex-1 flex flex-col justify-center gap-4">
              {testimonials.map((t, i) => (
                <div key={i}>
                  <TestimonialCard {...t} />
                  {i < testimonials.length - 1 && (
                    <div className="border-t border-gray-200 mt-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
