import AOS from 'aos';
import 'aos/dist/aos.css';

export default class AosService {
    static init() {
        AOS.init({
            duration: 1000
        });
    }
}