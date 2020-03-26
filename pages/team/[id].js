import { useRouter } from "next/router";

const Team = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Team: {id}</p>;
};

export default Team;
