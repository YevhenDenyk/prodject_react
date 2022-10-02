import {useForm} from "react-hook-form";
import {commentsService} from "../../service";


const CommentForm = ({setComments}) => {

    const {register, reset, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: "all"
    });

    const submit = (obj) => {
      commentsService.createComment(obj).then(({data})=>setComments(comments=>[...comments, data]))
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register('name',{required:{value:true, message:'error'}})}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text"{...register('email')}/>
            <button>Set</button>
        </form>
    );
};

export {CommentForm};