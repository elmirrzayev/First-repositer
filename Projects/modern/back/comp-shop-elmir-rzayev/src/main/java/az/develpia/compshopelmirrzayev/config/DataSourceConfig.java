package az.develpia.compshopelmirrzayev.config;

import javax.sql.DataSource;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSourceConfig {
    
    @Bean
    public DataSource getDataSource() {
        DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
        dataSourceBuilder.driverClassName("org.h2.Driver");
        dataSourceBuilder.url("jdbc:mysql://localhost:3306/comp_shopping");
        dataSourceBuilder.username("root");
        dataSourceBuilder.password("112233");
        return dataSourceBuilder.build();
    }
}
