"use client";
import React, { useCallback, useState } from "react";
import Input from "../Input";
import Model from "../Model";
import useRegisterModel from "../hooks/useResgisterModel";
import useLoginModel from "../hooks/useLoginModel";
import axios from "axios";

const RegisterModel = () => {
  const loginModel = useLoginModel();
  const registerModel = useRegisterModel();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    registerModel.onClose();
    loginModel.onOpen();
  }, [isLoading, registerModel, loginModel]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await axios.post("/api/register", {
        name,
        userName,
        email,
        password,
      });

      registerModel.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [registerModel, name, userName, email, password]);

  const bodyContent = (
    <div className="flex flex-col gap-3">
      <Input
        placeHolder="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />

      <Input
        placeHolder="username"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        disabled={isLoading}
      />

      <Input
        placeHolder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeHolder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4 ">
      <p>
        Already an accout ? {}
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline"
        >
          {" "}
          sign in
        </span>
      </p>
    </div>
  );

  return (
    <Model
      titleImage="/logo.webp"
      disabled={isLoading}
      isOpen={registerModel.isOpen}
      title="Create an accout"
      actionLable="Register"
      onClose={registerModel.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModel;
