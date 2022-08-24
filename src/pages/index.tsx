import { Modal } from "@mantine/core";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { CardDetail } from "src/components/CardDetail";
import { isModalState } from "src/globalStates/atoms/IsModalAtom";

const Home: NextPage = () => {
  const [isModal, setIsModal] = useRecoilState(isModalState);

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
