interface Props {
  width: number;
}

const Gmail = ({ width }: Props) => {
  return (
    <a href="mailto:elihowland25@gmail.com">
      <img
        src="src/assets/email_icon.png"
        alt="email_icon"
        style={{ maxWidth: `${width}%` }}
      />
    </a>
  );
};

export default Gmail;
