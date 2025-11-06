import './header.css';

export default function Header() {
  return (
    <header className="header">
      <img
        id="logotrator"
        src="/assets/Untitled_design__1_-removebg-previewatual.png"
        alt="Logo Trator"
      />

      <div id="circle-profile">
        <img
          id="circle"
          src="/assets/geometric-design-element-free-png.png"
          alt="Círculo decorativo"
        />
        <img
          id="profile"
          src="/assets/1761606239877.png"
          alt="Foto de perfil"
        />
      </div>
    </header>
  );
}
