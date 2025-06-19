import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { CreateBrand, CreateDevice, CreateType } from "shared/ui/modals";
import cls from "./Admin.module.css";

export const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  const setBrandVisibleHandler = () => {
    setBrandVisible(true);
  };

  const setTypeVisibleHandler = () => {
    setTypeVisible(true);
  };

  const setDeviceVisibleHandler = () => {
    setDeviceVisible(false);
  };

  return (
    <Container>
      <div className={cls.adminContainer}>
        <Button
          onClick={setBrandVisibleHandler}
          className={cls.brandVisibleBtn}
        >
          новый Брэнд
        </Button>
        <Button onClick={setTypeVisibleHandler} className={cls.typeVisibleBtn}>
          новый Тип
        </Button>
        <Button
          onClick={setDeviceVisibleHandler}
          className={cls.deviceVisibleBtn}
        >
          новое Устройство
        </Button>
        <CreateBrand show={brandVisible} setShow={setBrandVisible} />
        <CreateType show={typeVisible} setShow={setTypeVisible} />
        <CreateDevice show={deviceVisible} setShow={setDeviceVisible} />
      </div>
    </Container>
  );
};
