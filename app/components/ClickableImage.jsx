"use client"
import {  Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter,  Button,  useDisclosure,} from "@nextui-org/react";
import Image from "next/image";

export default function ClickableImage({ src, alt, width, height, className }) {

  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

  return (
    <>
      <div onClick={onOpen} className="cursor-pointer">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          <ModalHeader>{alt}</ModalHeader>
          <ModalBody className="flex justify-center min-w-96">
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={1200}
            />
          </ModalBody>
          <ModalFooter>
            <Button className="bg-[#336699] text-white font-medium px-6 py-2 rounded-lg hover:bg-[#d97706] transition duration-300 ease-in-out" onPress={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}