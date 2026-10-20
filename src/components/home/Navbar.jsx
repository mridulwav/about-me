import GooeyNav from '../GooeyNav';

function Nav() {
  const items = [
    { label: 'Home', href: '#' },
    { label: 'Work', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ];
  return (
    <GooeyNav
      items={items}
      initialActiveIndex={0}
      theme="dark"
      size="md"
      frame
      particleCount={15}
      spread={56}
      animationTime={600}
      timeVariance={300}
      gooeyness={0.5}
      wobble={0.5}
      hoverEffect
      onChange={(index, item) => console.log(index, item.label)}
    />
  );
}

export default Nav;
