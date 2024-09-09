

export default function Home() {
  return (
   
    <div className="flex justify-between items-center float-none p-8">
      <h1 className="text-violet-900 text-3xl font-bold font-serif float-left">THE Tina Times</h1>
      <ul className="flex float-end p-8 font-serif">
        <li>
        <button type="button" className="p-2">Shop</button>
        </li>
        <li><button type="button" className="p-2">Blog</button>
        </li>
        <li> <button type="button" className="p-2">Who We Are</button>
        </li>
        <li>
        <button type="button" className="p-2">My Profile</button>
        </li>
        <li>
        <button type="button" className="bg-violet-800 text-white p-2 rounded-lg ">Basket</button>
        
        </li>
      </ul>
    </div>
  );
}
