import { Modal } from "@mantine/core";
import axios, { AxiosResponse } from "axios";

import { doc, getDoc } from "firebase/firestore";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { CardDetail } from "src/components/CardDetail";
import { db } from "src/firebase/firebase";
import { isModalState } from "src/globalStates/atoms/IsModalAtom";
import { cardDetailsState } from "src/globalStates/atoms/cardDetailAtom";
import { CardDetailProps } from "src/types/cardDetail";

const Home: NextPage = () => {
  const [isModal, setIsModal] = useRecoilState(isModalState);
  const [cardDetails, setCardDetails] = useRecoilState(cardDetailsState);

  useEffect(() => {
    // const docRef = db.collection("cards").doc("test_cards");
    const docRef = doc(db, "cards", "test_cards");
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data()?.cards);
        setCardDetails(docSnap.data()?.cards);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });
  }, []);

  const Map = React.useMemo(
    () =>
      dynamic(() => import("src/components/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div>
      <Map />
      <Modal
        opened={isModal}
        onClose={() => setIsModal(false)}
        zIndex={8000}
        centered
        overlayOpacity={0.1}
        size={600}
      >
        <CardDetail />
      </Modal>
    </div>
  );
};

export default Home;
