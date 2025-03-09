import styles from "./page.module.css";
import { Button } from "../components/button/button";
import { Button  as TailwindButton} from "@/components/ui/button"


export default function Trial() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>BarberShop</h1>
        <p>Professional haircuts and styling</p>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Our Services</h2>
          <ul className={styles.serviceList}>
            <li className={styles.serviceItem}>Classic Haircut</li>
            <li className={styles.serviceItem}>Beard Trim</li>
            <li className={styles.serviceItem}>Hot Towel Shave</li>
            <li className={styles.serviceItem}>Hair Styling</li>
            <li className={styles.serviceItem}>Kids Haircut</li>
          </ul>
          {/* <button className={styles.button}>Book Appointment</button> */}
          <Button name="Book Appointment" />
          <TailwindButton className="mt-4 block text-lg px-8 py-7 text-center flex items-center justify-center">Book Appointment</TailwindButton>


        </section>
        <section className={styles.section}>
          <h2>About Us</h2>
          <p className={styles.sectionText}>
            Our barber shop has been serving the community since 2010. We pride
            ourselves on quality service and creating a welcoming atmosphere for
            all our clients.
          </p>
          <p className={styles.sectionText}>
            Our team of experienced barbers are dedicated to helping you look
            and feel your best.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Contact Information</h2>
          <address className={styles.address}>
            <p>123 Main St, Anytown, USA</p>
            <p>Phone: 555-555-5555</p>
            <p>Email: info@barbershop.com</p>
          </address>
          {/* <button className={styles.button}>Get Directions</button> */}
          <Button name="Get Directions" />
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2025 BarberShop. All rights reserved.</p>
      </footer>
    </div>
  );
}
