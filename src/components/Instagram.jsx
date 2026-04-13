import post1 from '../assets/image/insta/post1.png';
import post2 from '../assets/image/insta/post2.png';
import post3 from '../assets/image/insta/post3.png';
import post4 from '../assets/image/insta/post4.png';
import post5 from '../assets/image/insta/post5.png';
import './Instagram.css';

const POSTS = [
  { img: post1, url: 'https://www.instagram.com/pattycmedeiros/p/DFFkP62urGi/' },
  { img: post2, url: 'https://www.instagram.com/pattycmedeiros/p/DDMurKFuSWF/' },
  { img: post3, url: 'https://www.instagram.com/pattycmedeiros/p/C7UBPkbOjfo/' },
  { img: post4, url: 'https://www.instagram.com/pattycmedeiros/reel/C33BUU_u83_/' },
  { img: post5, url: 'https://www.instagram.com/p/CyDyrj7OXdS/' },
];

function IconInstagram() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Instagram() {
  return (
    <section className="insta">
      <a
        href="https://www.instagram.com/pattycmedeiros"
        target="_blank"
        rel="noopener noreferrer"
        className="insta__header"
      >
        <IconInstagram />
        <span>@pattycmedeiros</span>
      </a>

      <div className="insta__grid">
        {POSTS.map((post, i) => (
          <a
            key={i}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="insta__item"
          >
            <img src={post.img} alt={`Post ${i + 1}`} className="insta__img" />
            <div className="insta__overlay">
              <IconInstagram />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
