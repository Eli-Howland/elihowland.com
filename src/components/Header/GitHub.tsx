interface Props {
  width: number;
}

const GitHub = ({ width }: Props) => {
  return (
    <a href="https://github.com/Eli-Howland" target="_blank">
      <img
        src="/src/assets/github_image.png"
        alt="github link"
        style={{ maxWidth: `${width}%` }}
      />
    </a>
  );
};

export default GitHub;
