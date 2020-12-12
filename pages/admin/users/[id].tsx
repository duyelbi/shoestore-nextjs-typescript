import { useRouter } from 'next/router';
import Link from 'next/link'
import styles from '../../../styles/Home.module.scss'

// Client Side Rendering
export default function AdminUser() {
    const router = useRouter();

    function handleOnclick() {
        router.push('/');
    }

    return (
        <>
            <title>users detail</title>
            <h1 className={styles.breadcrumb}>
                admin/user/{router.query.id}
            </h1>

            <p>
                <Link href="/">
                    <button className="active">Home</button>
                </Link>
            </p>

            <button onClick={handleOnclick}>go to home page</button>
        </>
    )
}