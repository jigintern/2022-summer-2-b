import { Modal } from "@mantine/core";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { isModalState } from "src/globalStates/atoms/IsModalAtom";

function MapPage() {
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
      >
        <div
          style={{
            height: "50vh",
          }}
        />
      </Modal>
    </div>
  );
}

export default MapPage;
