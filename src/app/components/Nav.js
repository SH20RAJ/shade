import Link from "next/link";
export default function(){
    return(
        <nav>
  <div className="header"><Link href={"../"}>Shades</Link></div>
  <ul>
    <Link href="../">
      <li>
        <ion-icon name="home-outline" />
      </li>
    </Link>
    <Link href="../search">
      <li>
        <ion-icon name="search-outline" />
      </li>
    </Link>
    <Link href="../community">
      <li>
        <ion-icon name="contrast-outline" />
      </li>
    </Link>
    <Link href="../videos">
      <li>
        <ion-icon name="flame-outline" />
      </li>
    </Link>
    <Link href="../join">
      <li>
        <ion-icon name="person-circle-outline" />
      </li>
    </Link>
  </ul>
</nav>


    );
}