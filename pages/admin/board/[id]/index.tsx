import axios from "axios";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Detail = () => {
  const {
    query: { id },
    asPath,
  } = useRouter();
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/board/${id}`).then(({ data }) => setItem(data));
    }
  }, [id]);

  return (
    item && (
      <div>
        <div>{item.title}</div>
        <div dangerouslySetInnerHTML={{ __html: item.content }} />
        <div>
          <div onClick={() => router.push(`${asPath}/edit`)}>수정</div>
        </div>
      </div>
    )
  );
};

export default Detail;
