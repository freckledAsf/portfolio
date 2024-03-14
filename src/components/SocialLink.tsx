interface Props {
  href: string;
  children: React.ReactNode;
}

const SocialLink = ({ href, children }: Props) => (
  <a
    href={href}
    target={href.includes("mailto") ? "_self" : "_blank"}
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default SocialLink;
