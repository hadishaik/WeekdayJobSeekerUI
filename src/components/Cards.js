import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

const Cards = ({ styles, data, appliedFilters, fetchApi }) => {
  const filteredCards = useSelector((state) => state.filter.filterJobs);
  return (
    <section className="" style={styles.cards} key={2}>
      {appliedFilters ? (
        filteredCards?.map((item) => (
          // Reusable Card Component
          <Card
            item={item ?? []}
            card={styles.card}
            cardSpace={styles.cardSpace}
            postedOn={styles.postedDate}
            companyDetails={styles.organization}
            aboutUs={styles.aboutUs}
            expSection={styles.expSection}
            imgStyles={styles.imgStyles}
            imgStyles2={styles.imgStyles2}
            btnStyles={styles.btnStyles}
            btnStyles2={styles.btnStyles2}
            btnTitle={"Easy Apply"}
            btnTitle2={"Unlock refferal asks"}
          />
        ))
      ) : (
        <InfiniteScroll
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "3.5%",
            overflow: "visible",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          dataLength={data.length}
          next={fetchApi}
          hasMore={true}
          loader={
            <div
              style={{
                width: "1150px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <img
                src="/spinner.gif"
                alt="loader-Icon"
                style={{ height: "60px", width: "60px", objectFit: "contain" }}
              />
            </div>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          pullDownToRefreshThreshold={90}
        >
          {data?.map((item) => (
            <Card
              item={item ?? []}
              card={styles.card}
              cardSpace={styles.cardSpace}
              postedOn={styles.postedDate}
              companyDetails={styles.organization}
              aboutUs={styles.aboutUs}
              expSection={styles.expSection}
              imgStyles={styles.imgStyles}
              imgStyles2={styles.imgStyles2}
              btnStyles={styles.btnStyles}
              btnStyles2={styles.btnStyles2}
              btnTitle={"Easy Apply"}
              btnTitle2={"Unlock refferal asks"}
            />
          ))}
        </InfiniteScroll>
      )}
      {filteredCards.length < 1 && appliedFilters && (
        <div
          style={{
            fontSize: "18px",
            textAlign: "center",
            width: "100%",
            paddingTop: "10%",
          }}
        >
          No Jobs found
        </div>
      )}
    </section>
  );
};

export default React.memo(Cards);
