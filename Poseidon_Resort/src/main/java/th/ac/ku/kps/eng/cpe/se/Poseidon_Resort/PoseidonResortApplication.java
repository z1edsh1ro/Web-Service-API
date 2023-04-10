package th.ac.ku.kps.eng.cpe.se.Poseidon_Resort;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("th.ac.ku.kps.eng.cpe.se")
@EnableJpaRepositories("th.ac.ku.kps.eng.cpe.se.repository")
public class PoseidonResortApplication {

	public static void main(String[] args) {
		SpringApplication.run(PoseidonResortApplication.class, args);
	}
}
