package com.jhipster.demo.crm.repository.search;

import com.jhipster.demo.crm.domain.Product;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Product} entity.
 */
public interface ProductSearchRepository extends ElasticsearchRepository<Product, Long> {
}
