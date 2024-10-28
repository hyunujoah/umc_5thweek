import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';

const schema = yup.object().shape({
  email: yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일을 입력해 주세요.'),
  password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required('비밀번호를 입력해 주세요.'),
  passwordCheck: yup.string()
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호 확인을 입력해 주세요.')
});

const SignupPage = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <SignupContainer>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="이메일을 입력해 주세요."
          {...register('email')}
        />
        {errors.email && <Error>{errors.email.message}</Error>}
        
        <Input
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          {...register('password')}
        />
        {errors.password && <Error>{errors.password.message}</Error>}
        
        <Input
          type="password"
          placeholder="비밀번호를 다시 입력해 주세요."
          {...register('passwordCheck')}
        />
        {errors.passwordCheck && <Error>{errors.passwordCheck.message}</Error>}
        
        <Button type="submit" disabled={!(watch('email') && watch('password') && watch('passwordCheck') && !errors.email && !errors.password && !errors.passwordCheck)}>
          제출
        </Button>
      </form>
    </SignupContainer>
  );
};

export default SignupPage;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
`;

const Error = styled.p`
  color: red;
  font-size: 0.9em;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${({ disabled }) => (disabled ? 'gray' : '#ff0066')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
