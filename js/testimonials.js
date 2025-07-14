const stestimonials = [
  {
    name: "Anjali",
    image: "assets/images/anjali.jpg", 
    paragraph: "My name is Anjali, and I'm from Chennai. A few days ago, I had a sudden health issue and was rushed to Rajalakshmi Medical College. The doctors and nurses were incredibly supportive and acted quickly. I was admitted for two days, and I received excellent care, including quality medical attention, nutritious food, and a comfortable stay. I'm really grateful for their kindness and service."
  },
  {
    name: "Ravi",
    image: "assets/images/ravi.jpg",
    paragraph: "I'm Ravi from Madurai. I had a workplace accident and was admitted to Rajalakshmi Medical College. From the moment I arrived, the staff provided timely care and attention. Their dedication during and after my surgery made my recovery much smoother."
  },
  {
    name: "Meena",
    image: "assets/images/meena.jpg",
    paragraph: "My name is Meena, a homemaker. I was admitted to Rajalakshmi Medical College with severe stomach pain. The hospital team gave me timely and effective treatment, along with a clean and safe environment to recover. I truly felt cared for every step of the way."
  },
  {
    name: "Sanjay",
    image: "assets/images/sanjay.jpg",
    paragraph: "I'm Sanjay. After a road accident, I was rushed to Rajalakshmi Medical College in critical condition. The medical team acted fast to stabilize me and continued to monitor and support my recovery. Their care and commitment made a difficult time much easier."
  },
  {
    name: "Bharat",
    image: "assets/images/bharat.jpg", 
    paragraph: "I’m Bharat from Nepal. After meeting with a cycling accident, I was admitted to Rajalakshmi Medical College on my employer’s recommendation. The medical care and support I received were outstanding. I’m truly grateful to the entire team for their compassion and professionalism."
  }

];
function renderTestimonials() {
  const container = document.getElementById("testimonialContainer");
  stestimonials.forEach(testimonial => {
    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.innerHTML = `
      <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-img" />
      <h3>${testimonial.name}</h3>
      <p class="testimonial-text">${testimonial.paragraph}</p>
    `;
    container.appendChild(card);
  });
}
window.onload = renderTestimonials;