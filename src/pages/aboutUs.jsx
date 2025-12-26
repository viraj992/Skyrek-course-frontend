export default function AboutusPage(){
    return(
        <div className="bg-primary text-secondary px-6 md:px-12 py-16">

      {/* HEADER */}
      <header className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Welcome to [Your Brand], where beauty meets confidence.
          We believe that beauty isn’t just a look — it’s a feeling.
        </p>
      </header>

      {/* BRAND STORY */}
      <section className="max-w-4xl mx-auto mb-16 space-y-6">
        <h2 className="text-3xl font-semibold">Our Story</h2>
        <p>
          At [Your Brand], we believe that beauty has no expiration date —
          true beauty is timeless. Our journey began with a simple idea:
          to create cosmetics and skincare that elevate your glow and
          confidence, every day.
        </p>
        <p>
          Just like the premium beauty lines you admire, we focus on
          luxurious yet effective formulations that help your skin look and
          feel its best. Every product is thoughtfully crafted — with
          potent ingredients and a passion for results.
        </p>
      </section>

      {/* FOUNDER SECTION */}
      <section className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-center mb-4">Meet Our Founder</h2>
        <p>
          “[Your Brand] was born from a deep love for beauty and self-care.
          I believe that everyone deserves products that work hard, feel
          incredible, and make life a little more radiant. From my first
          formulation to our latest launch, we test, refine, and innovate
          until we deliver only the best.”
        </p>
        <p className="mt-4 font-bold text-right">— Founder, [Your Name]</p>
      </section>

      {/* VALUES / PROCESS */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          What Makes Us Different
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Premium Formulas</h3>
            <p>
              Carefully curated blends that deliver visible results without compromise.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Cruelty-Free</h3>
            <p>
              We believe in beauty that’s kind — to your skin and to the world.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Designed for Confidence</h3>
            <p>
              Every product inspires you to feel bold, radiant, and uniquely you.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-accent text-white p-8 rounded-xl text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-3">Our Mission</h2>
        <p className="text-lg">
          To empower every person to feel confident and beautiful in their
          own skin — with products that are effective, elegant, and made for life.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center max-w-4xl mx-auto mb-12">
        <h3 className="text-2xl font-bold mb-3">Ready to Discover Your Glow?</h3>
        <button className="bg-accent text-white px-6 py-3 rounded-lg shadow hover:opacity-90">
          Shop Our Collection
        </button>
      </section>

    </div>
    );
}