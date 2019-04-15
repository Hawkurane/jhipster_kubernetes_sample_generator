package com.jhipster.demo.crm.repository.search;

import com.jhipster.demo.crm.domain.Customer;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Customer} entity.
 */
public interface CustomerSearchRepository extends ElasticsearchRepository<Customer, Long> {
}
