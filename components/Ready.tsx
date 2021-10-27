import Image from "components/Image";

const Ready = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f1f1f1",
    }}
  >
    <div>
      <Image src="/images/image-ready.png" width="328" height="266" />
    </div>
    <div style={{ fontSize: 48, fontWeight: 700 }}>페이지 준비중입니다.</div>
    <div style={{ fontSize: 34, fontWeight: 700, color: "#9856c9" }}>
      COMMING SOON
    </div>
  </div>
);

export default Ready;
