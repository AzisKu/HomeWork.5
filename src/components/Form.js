import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { sendForm } from '../redux/actions';

export const Form = () => {
    const { user, error, message } = useSelector(({ form }) => form);
    const dispatch = useDispatch();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        dispatch(sendForm(data.name, data.username, data.email, data.website));
    };
    return (
        <div>
             {/*Register Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="name"
                    type="text"
                    {...register('name', {
                        required: 'Requiered to fill in!',
                    })}
                />
                {errors?.name && <p>{errors?.name?.message || 'Error!'}</p>}
                <input
                    placeholder="username"
                    type="text"
                    {...register('username', {
                        required: 'Requiered to fill in !',
                    })}
                />
                {errors?.username && <p>{errors?.username?.message || 'Error!'}</p>}
                <input
                    placeholder="email"
                    type="email"
                    {...register('email', {
                        required: 'Requiered to fill in!',
                    })}
                />
                {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
                <input
                    placeholder="website"
                    type="url"
                    {...register('website', {
                        required: 'Requiered to fill in!',
                    })}
                />
                {errors?.website && <p>{errors?.website?.message || 'Error!'}</p>}
                <input className="submit" type="submit" />
            </form>
            {/*Catching an error*/}
            {error && <h1 style={{ color: 'red' }}>{error.message} :(</h1>}
            {/* Message */}
            {message && <h1 style={{ color: 'red' }}>{message}</h1>}
            {/* User */}
            <br />
            {!Object.entries(user).length ? (
                ''
            ) : (
                <div>
                    <h4>name: {user.name}</h4>
                    <h4>username: {user.username}</h4>
                    <h4>email: {user.email}</h4>
                    <h4>
                        website:{' '}
                        <a target="_blank" href={user.website}>
                            Website
                        </a>
                    </h4>
                </div>
            )}
        </div>
    );
};